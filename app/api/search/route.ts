import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest){
  const q = req.nextUrl.searchParams.get('q')||'';
  if(q.length<3) return NextResponse.json({results:[]});
  try{
    const url = `https://api.openalex.org/works?search=${encodeURIComponent(q)}&per-page=20&select=id,display_name,publication_year,cited_by_count,doi,authorships`;
    const r = await fetch(url, { next: { revalidate: 30 } });
    if(!r.ok) throw new Error('openalex error');
    const data = await r.json();
    const results = (data.results||[]).map((x:any)=>({
      id: x.id, title: x.display_name, authors: (x.authorships||[]).slice(0,4).map((a:any)=>a.author?.display_name).filter(Boolean),
      year: x.publication_year, cited_by_count: x.cited_by_count||0, doi: x.doi
    }));
    return NextResponse.json({results});
  }catch(e){
    return NextResponse.json({results:[], error: 'search failed'}, {status: 200});
  }
}
