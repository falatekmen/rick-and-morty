import Metrics from './Metrics';

const type = {
    light: 'Segoe UI',
    bold: 'Segoe UI Bold',
    boldItalic: 'Segoe UI Bold Italic',
	  italic: 'Segoe UI Italic',
   };
   
   const step = Metrics.width * 0.0025;
   const zero = Metrics.width * 0.002;
   const size = punto => zero + step * punto;
   
   export default {
     type,
     size,
   };