import axios from "axios";

export class HttpClient {
  async getData(url: string) {
    // const { data, status } = await axios.get(url);
    const resp = await fetch(url);
    const data = await resp.json();
    return { data, status: resp.status };
  }
}
