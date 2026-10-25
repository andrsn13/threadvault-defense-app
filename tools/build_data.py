# Regenerates data.js from content/PRESENTATION_DEFENSE_SCRIPT.json (data.js lets the app run from file:// without fetch).
import json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
d = json.loads((root/'content'/'PRESENTATION_DEFENSE_SCRIPT.json').read_text(encoding='utf-8'))
(root/'data.js').write_text('window.TV_DATA = ' + json.dumps(d, ensure_ascii=False, indent=1) + ';\n', encoding='utf-8')
print('data.js written;', len(d['slides']), 'slides')
