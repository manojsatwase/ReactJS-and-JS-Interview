function add3Dots(string, limit){
    let dots = "...";
    return string.length > limit ? string = string.slice(0,limit) + dots: string
  }
  add3Dots('In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia',20)