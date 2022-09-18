export default function handler(req, res) {
    console.log(req.query)
    const { slug } = req.query

    const tag = slug[0];
    

    res.end(`Post: ${slug.join(', ')}`)
  }