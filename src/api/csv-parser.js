import Papa from 'papaparse';

export function parse(content) {
  return Papa.parse(content, {
    header: true
  });
}
