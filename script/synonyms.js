const synonyms = (arr)=>{
const htmlElemets = arr.map((el)=>`<span class="btn bg-[#EDF7FF]">${el}</span>`)
return (htmlElemets.join(" "))
}


// synonyms(synonyms)