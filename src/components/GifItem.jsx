
export const GifItem = ({id,title,url}) => {
  
  console.log(url)
    return (
    //<li key={ id }>{ title }</li>
    <div className="card">
        <img src={ url } alt={ title } />
    </div>
  )
}
