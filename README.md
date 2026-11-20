# myCampus (Northwind University) – v2 with Admin Panel

## Updating your GitHub site to this version
1. Open your repo on GitHub → Add file → Upload files.
2. Drag in ALL files from this folder (index.html, sw.js, manifest.json, icons, README.md) → Commit changes.
3. After 1–2 minutes, close and reopen the app on your phone.

## Admin login
On the login screen use your admin email and password. You land in the Admin Panel
(there's also an "Admin" button at the bottom right while you're signed in as admin).
Any other username/password opens the normal student view.

You can edit: profile, attendance logs, cafeteria menus + "Meal Served On" times,
final results, and (as text) timetable, holidays, messages, leaves, curriculum,
exam schedule and clearance. Edits save instantly on the device you're using.

## Making changes show on every phone ("Publish") – one-time setup
The site has no server, so the admin panel saves your data as a file called
data.json in your GitHub repo. It needs a GitHub access token for that:

1. github.com → your profile picture → Settings → Developer settings
   → Personal access tokens → Fine-grained tokens → Generate new token.
2. Name: myCampus admin. Expiration: pick one (e.g. 1 year).
3. Repository access: "Only select repositories" → MyCamu.
4. Permissions → Repository permissions → Contents: "Read and write".
5. Generate token and copy it (it starts with github_pat_…).
6. In the app: Admin Panel → GitHub settings → paste the token → Save.
   (Username bangpinkshow-sketch, repo MyCamu, branch main are pre-filled.)

Now press "Publish to all devices" after editing. Phones show the new data
about 1–2 minutes later, next time the app is opened.

Keep the token private. Never put it in a file in the repo. It's stored only on the device where you typed it in.
