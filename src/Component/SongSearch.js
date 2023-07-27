import React from 'react'
import search from '../images/search.png';
import icon1 from '../images/threeline.png';
import icon2 from '../images/bi_download.png';
import icon3 from '../images/love.png';
import { Link } from 'react-router-dom';
export default function SongSearch() {
    return (
        <>
            <div className="row">

                <div className="col-xl-8 col-lg-8 col-md-12 col-12 ordr2">
                    <form action="">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search for products"
                            ></input>
                            <div className="searchIcon">
                                <img src={search} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-6 ordr3">
                    <div className="from_icon_whish_cart_main">
                        <div><h6>Podcast</h6></div>

                        <div className='theme-custom-checkbox'>
                            <label>
                                <input type="checkbox" />
                                <span className=''>
                                    <i />
                                </span>
                            </label>

                        </div>

                       <div> <h6>Music</h6></div>
                        <div className="from_icon_whish_cart1">
                            <Link to="">
                                <img src={icon3} alt="" />
                            </Link>
                        </div>
                        <div className="from_icon_whish_cart1">
                            <Link to="">
                                <img src={icon2} alt="" />
                            </Link>
                        </div>
                        <div className="from_icon_whish_cart1">
                            <Link to="">
                                <img src={icon1} alt="" />
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}