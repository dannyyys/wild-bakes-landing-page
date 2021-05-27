export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(404).json({ message: "error" });
  }

  const menuFolderID = "14hwIEjFfxT2uVu-K-WPXb3tALJUK8hOe";
  const googleDriveAPIKey = process.env.GOOGLE_DRIVE_API_KEY;

  const url = `https://www.googleapis.com/drive/v3/files?q=%27${menuFolderID}%27+in+parents&key=${googleDriveAPIKey}`;
  const response = await fetch(url);
  const jsonData = await response.json();

  const urlMask = "https://drive.google.com/uc?export=view&id=";
  const menuID = jsonData.files[0].id;
  const menuURL = `${urlMask}${menuID}`;

  return res.status(200).json({ url: menuURL });
}
