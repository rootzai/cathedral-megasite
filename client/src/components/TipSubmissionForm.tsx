import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TipSubmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    anonymous: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam honeypot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (bots will fill this hidden field)
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

    setStatus('submitting');

    try {
      // Create FormData for file uploads
      const submitData = new FormData();
      
      if (!formData.anonymous) {
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
      }
      
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      submitData.append('anonymous', formData.anonymous.toString());
      submitData.append('timestamp', new Date().toISOString());
      
      // Add files
      files.forEach((file, index) => {
        submitData.append(`file_${index}`, file);
      });

      // For now, use Formspree (free tier: 50 submissions/month)
      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          anonymous: false,
        });
        setFiles([]);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
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
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
      {/* Privacy Notice */}
      <div className="p-4 bg-blue-900/20 border border-blue-600 rounded-lg text-sm">
        <p className="text-blue-300">
          <strong>Privacy Notice:</strong> Your information is transmitted securely and will be kept confidential. 
          We do not share source information with third parties. Check "Anonymous Submission" below if you prefer not to provide contact details.
        </p>
      </div>

      {/* Anonymous Toggle */}
      <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
        <input
          type="checkbox"
          id="anonymous"
          checked={formData.anonymous}
          onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
          className="w-5 h-5 rounded border-gray-600 bg-gray-700 text-red-600 focus:ring-red-600"
        />
        <label htmlFor="anonymous" className="text-gray-200 font-semibold cursor-pointer">
          Submit Anonymously (no contact information required)
        </label>
      </div>

      {/* Contact Information (hidden if anonymous) */}
      {!formData.anonymous && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none"
              placeholder="your@email.com"
            />
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
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none"
          placeholder="Brief description of your tip"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
          Your Tip <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={8}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-600 focus:outline-none resize-none"
          placeholder="Provide as much detail as possible. Include dates, names, locations, and any supporting information."
        />
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
                key={index}
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
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
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
              Submission failed. Please try again or use one of the alternative contact methods above.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === 'submitting'}
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
