import '../App.css';

function Header(props) {
    return (
        <div className='nav'>
 <div className='flex shopping-card'>
        
        <div onClick={() => props.handleShow(false)} >ShopCart</div>
        <div onClick={() => props.handleShow(true)}> Cart
            <sup> {props.count} </sup>
        </div>
        
    </div>
    <div className='heading'>
                <h1>WELCOME TO OUR WEBSITE</h1> </div>
                <div className='image'>
                </div>
     <div className='animation'>

     <div class="static-txt"></div>
    <ul class="dynamic-txts">
      <li><span>Explore our Products </span></li>
      <li><span>New Trending style </span></li>
      <li><span>Style with ShopCart</span></li>
    </ul>
  

        
     </div>
     </div>

       
    );
}

export default Header;