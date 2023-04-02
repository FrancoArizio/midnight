import escape from "../images/mufflerhks.jpg"
import aleron from "../images/voltex.jpg"
import longchamp from "../images/longchamps.jpg"
import underglow from "../images/underglow.jpg"
import rx7 from "../images/rx7.jpg"
import civicef from "../images/civicef.jpg"
import ae86 from "../images/ae86.jpg"
import skyline from "../images/r32.jpg"

export default function ItemContainer(){
    const prod =[{producto:"HKS Muffler",precio: 25000,imagen: (escape),category: "mod"},
    {producto:"VOLTEX Wing",precio: 75000,imagen: (aleron),category: "mod"},
    {producto:"LONGCHAMPS Wheels",precio: 100000,imagen: (longchamp),category: "mod"},
    {producto:"Generic UNDERGLOW",precio: 15000,imagen: (underglow),category: "mod"},
    {producto:"Mazda RX7 FD",precio: 48000000,imagen: (rx7),category: "car"},
    {producto:"Honda Civic EF",precio: 15000000,imagen: (civicef),category: "car"},
    {producto:"Toyota AE86",precio: 10000000,imagen: (ae86),category: "car"},
    {producto:"Nissan Skyline R32 GTT",precio: 25000000,imagen: (skyline),category: "car"}]
    
    const resultado = prod.map( (prod) =>
    <article class="producto_element">
    <img class="producto_element-image" src={prod.imagen} ></img>
    <p class="producto_element-text">{prod.producto}<br></br>
    </p>
    <p class="producto_element-precio">¥{prod.precio}</p>
    <button class="btn_comprar">BUY</button>
</article> )
console.log(resultado)
return(
    <>
    {resultado}
    </>
)
}