export default function ({ req, redirect }) {
  if (!req.user) {
    return redirect('/auth')
  }
}