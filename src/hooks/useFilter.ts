import { useMemo } from "react"

export function useFilter(listing: any[], sorting: string){
  const filteredItems = useMemo(() => {
    return listing.sort((a, b) => {
      if(sorting === 'nameReverse'){
        return a.name < b.name ? 1 : 
              a.name > b.name ? -1 :
              0
      }
      if(sorting === 'name'){
        return a.name < b.name ? -1 : 
              a.name > b.name ? 1 :
              0
      }
      if(sorting === 'id'){
        return a.id < b.id ? -1 : 
              a.id > b.id ? 1 :
              0
      }

      return a.id < b.id ? 1 : 
      a.id > b.id ? -1 :
      0
    })
  }, [listing, sorting])

  return filteredItems
}