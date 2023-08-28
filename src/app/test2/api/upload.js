import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing form data.' });
      }

      const tempPath = files.image.path;
      const targetPath = path.join(process.cwd(), 'public/uploads', files.image.name);

      fs.renameSync(tempPath, targetPath);

      return res.status(200).json({ message: 'Image uploaded successfully.' });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};