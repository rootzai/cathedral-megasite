import React from 'react';
import { renderToString } from 'react-dom/server';
import EvidenceHub from './client/src/pages/evidence/EvidenceHub.tsx';

try {
  renderToString(React.createElement(EvidenceHub));
  console.log('SUCCESS');
} catch (e) {
  console.error('ERROR:', e.message);
  console.error(e.stack);
}
