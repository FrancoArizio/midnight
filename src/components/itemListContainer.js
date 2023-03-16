import escape from "../images/mufflerhks.jpg"
export default function ItemContainer(){
    return(
    <article class="producto_element">
            <img class="producto_element-image" src={escape}></img>
            <p class="producto_element-text">Japanese imported HKS Muffler<br></br>
            </p>
            <p class="producto_element-precio">¥25000</p>
            <button class="btn_comprar">BUY</button>
        </article>
)
}
