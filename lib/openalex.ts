export interface Work {
  id: string; title: string; authors: string[]; year?: number; cited_by_count: number; doi?: string; abstract?: string;
}
export async function searchOpenAlex(q: string): Promise<Work[]> {
  if(!q) return [];
  const res = await fetch(`https://api.openalex.org/works?search=${encodeURIComponent(q)}&per-page=20&select=id,display_name,publication_year,cited_by_count,doi,authorships`, { next: { revalidate: 60 } });
  if(!res.ok) throw new Error('OpenAlex failed');
  const data = await res.json();
  return (data.results || []).map((r:any)=>({
    id: r.id, title: r.display_name, authors: (r.authorships||[]).slice(0,3).map((a:any)=>a.author?.display_name).filter(Boolean),
    year: r.publication_year, cited_by_count: r.cited_by_count||0, doi: r.doi
  }));
}
