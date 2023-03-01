function Card(props){
    const { img, title } = props;

    return(
        <div style={{ width: 70,fontFamily:'verdana', color: 'rgb(161, 129, 80)'}}>
        <h1 style={{textAlign:'center'}}></h1>
        <img width={80} src={img} alt={title} height={50}/>
        <span>{title}</span> 
        </div> 
    );
}
export default Card;