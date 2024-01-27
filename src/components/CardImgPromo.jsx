
function CardImgPromo() {
  return (
    <div className="flex gap-2">
      <div className='flex flex-col rounded '>
        <img className="w-[200px] h-[200px] object-cover rounded-[20px]" src="https://i.pinimg.com/736x/76/2f/15/762f15cfbf7910e8c527910d4a91b9f4.jpg" alt="" />
        <p className='font-bold'>Aprovechá tu promo</p>
        <p>2 x 1 en pizza</p>
        <span className='bg-customPromos font-bold p-2 text-customMelon rounded text-center'>jueves y viernes</span>
    </div>

    <div className='flex flex-col rounded '>
        <img className="w-[200px] h-[200px] object-cover rounded-[20px]" src="https://promoburger.com/images/secciones/Promos-Burger-Seccion-Panchos.jpg" alt="" />
        <p className='font-bold'>Lunes de panchos</p>
        <p>te devolvenmos el 20</p>
        <span className='bg-customPromos font-bold p-2 text-customMelon rounded text-center'>sabados</span>
    </div>
    </div>
  )
}

export default CardImgPromo