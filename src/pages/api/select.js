import { supabase } from "../../../lib/supabaseClient"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  
  let { data: dummy, error } = await supabase
    .from('dummy')
    .select('*')
  
  if(dummy){
    res.send(dummy)
  }
}
