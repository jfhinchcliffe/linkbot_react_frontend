export default function APICall(path, options) {
    return fetch('https://linkbot-pnhmlmzlhj.now.sh/' + path, options)
      .then(res => res.json())
}