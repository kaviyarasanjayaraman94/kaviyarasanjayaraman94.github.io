import zipfile
import xml.etree.ElementTree as ET

docx_file = r"D:\KAVI\Resume\Latest\Kaviyarasan J Latest Profile.docx"
text = []

try:
    with zipfile.ZipFile(docx_file, 'r') as zf:
        xml_content = zf.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        
        # The w namespace
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        # Find all paragraphs
        for para in tree.findall('.//w:p', ns):
            para_text = ""
            for run in para.findall('.//w:t', ns):
                if run.text:
                    para_text += run.text
            if para_text.strip():
                text.append(para_text)
                
    print('\n'.join(text))
except Exception as e:
    print(f"Error: {e}")
