import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle, Send, Upload, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const tipSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  anonymous: z.boolean(),
  honeypot: z.string().optional(),
});

type TipFormValues = z.infer<typeof tipSchema>;

export function TipSubmissionForm() {
  const tipEndpoint = useMemo(
    () => import.meta.env.VITE_TIP_FORM_ENDPOINT?.trim() ?? '',
    []
  );
  const submissionEnabled = Boolean(tipEndpoint);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<TipFormValues>({
    resolver: zodResolver(tipSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      anonymous: false,
      honeypot: '',
    },
  });

  const isAnonymous = watch('anonymous');

  const onSubmit = async (data: TipFormValues) => {
    setErrorMessage(null);

    // Check honeypot (bots will fill this hidden field)
    if (data.honeypot) {
      // Spam detected — silently reject
      return;
    }

    if (!submissionEnabled) {
      setStatus('error');
      setErrorMessage('Secure tip submission is temporarily unavailable. Please use the Signal or ProtonMail options listed below.');
      return;
    }

    setStatus('submitting');

    try {
      // Create FormData for file uploads
      const submitData = new FormData();

      if (!data.anonymous) {
        submitData.append('name', data.name || '');
        submitData.append('email', data.email || '');
      }

      submitData.append('subject', data.subject);
      submitData.append('message', data.message);
      submitData.append('anonymous', data.anonymous.toString());
      submitData.append('timestamp', new Date().toISOString());

      // Add files
      files.forEach((file, index) => {
        submitData.append(`file_${index}`, file);
      });

      const response = await fetch(tipEndpoint, {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setFiles([]);
      } else {
        throw new Error(`Submission failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Submission failed. Please try again or use an alternate contact method.'
      );
      setStatus('error');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-green-900/20 border border-green-600 rounded-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-green-400">Tip Submitted Successfully</h3>
        <p className="text-gray-300 mb-6">
          Thank you for your submission. We will review your information carefully and follow up if needed.
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="outline"
          className="bg-transparent"
        >
          Submit Another Tip
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
      {/* Privacy Notice */}
      <div className="p-4 bg-blue-900/20 border border-blue-600 rounded-lg text-sm">
        <p className="text-blue-300">
          <strong>Privacy Notice:</strong> Your information is transmitted securely and will be kept confidential.
          We do not share source information with third parties. Check "Anonymous Submission" below if you prefer not to provide contact details.
        </p>
      </div>

      {!submissionEnabled && (
        <div className="flex items-center gap-3 p-4 bg-orange-900/30 border border-orange-600 rounded-lg text-sm text-orange-100">
          <AlertCircle className="w-5 h-5 text-orange-300" />
          Secure web submissions are temporarily disabled. Please use the Signal or ProtonMail options listed below until this encrypted form is re-enabled.
        </div>
      )}

      {/* Anonymous Toggle */}
      <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
        <input
          type="checkbox"
          id="anonymous"
          {...register('anonymous')}
          className="w-5 h-5 rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-600"
        />
        <label htmlFor="anonymous" className="text-gray-200 font-semibold cursor-pointer">
          Submit Anonymously (no contact information required)
        </label>
      </div>

      {/* Contact Information (hidden if anonymous) */}
      {!isAnonymous && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>
      )}

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none"
          placeholder="Brief description of your tip"
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
          Your Tip <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={8}
          {...register('message')}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none resize-none"
          placeholder="Provide as much detail as possible. Include dates, names, locations, and any supporting information."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Attach Documents (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-red-600 transition-colors">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-400 mb-2">Upload supporting documents, images, or evidence</p>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
          />
          <label
            htmlFor="file-upload"
            className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition-colors"
          >
            Choose Files
          </label>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${file.lastModified}`}
                className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
              >
                <span className="text-sm text-gray-300 truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-400 ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Honeypot (hidden from users, catches bots) */}
      <input
        type="text"
        {...register('honeypot')}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit Button */}
      <div>
        {status === 'error' && (
          <div className="mb-4 p-4 bg-red-900/20 border border-red-600 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-300">
              {errorMessage ?? 'Submission failed. Please try again or use one of the alternative contact methods above.'}
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === 'submitting' || !submissionEnabled}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting Securely...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Tip Securely
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you acknowledge that your information will be handled according to our privacy practices described above.
      </p>
    </form>
  );
}
