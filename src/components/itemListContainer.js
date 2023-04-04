

export default function ItemListContainer({data}){
    const resultado = data?.map( (prod) =>
    <article class="producto_element">
    <img class="producto_element-image" src={prod.imagen} ></img>
    <p class="producto_element-text">{prod.producto}<br></br>
    </p>
    <p class="producto_element-precio">¥{prod.precio}</p>
    <button class="btn_comprar">BUY</button>
</article> )
    return(
        <div class="productos">
    {resultado}
        </div>
)

}
