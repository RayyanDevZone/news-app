// api/newsProxy.js

const axios = require('axios');

export default async function handler(req, res) {
  try {
    const apiKey = '98d3226fcd0e4709ae2f19c3f5376a85';
    const url = 'https://newsapi.org/v2/top-headlines';
    const { country } = req.query;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        country,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
