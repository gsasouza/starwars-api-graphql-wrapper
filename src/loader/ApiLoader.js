import DataLoader from 'dataloader';
import fetch from 'node-fetch';

const fetchResponseByURL = url => fetch(url).then( res => res.json() ).then( json => json.results || json );

export default new DataLoader( urls => Promise.all(urls.map(fetchResponseByURL)) );
