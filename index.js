import axios from "axios";

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const query = url.searchParams.get("q");

      if (!query) {
        return new Response(
          JSON.stringify({
            status: false,
            creator: env.CREATOR,
            message: "Missing ?q= parameter"
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${env.API_KEY}&cx=${env.CX_ID}&q=${encodeURIComponent(query)}`;

      const res = await axios.get(apiUrl);

      if (res.data.items) {
        const results = res.data.items.map(item => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet
        }));

        return new Response(
          JSON.stringify({
            status: true,
            creator: env.CREATOR,
            data: results
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      } else {
        return new Response(
          JSON.stringify({
            status: false,
            creator: env.CREATOR,
            data: "Page Not Found :/"
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (error) {
      return new Response(
        JSON.stringify({
          status: false,
          creator: env.CREATOR,
          error: error.toString()
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
  }
};
