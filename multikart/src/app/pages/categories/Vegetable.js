import Product from "./Product"
import '../../../assets/css/Vegetable.css';

function vegetable() {
    var vegetableUrl = "http://localhost:4000/vegetable";

    return (
        <div>
            <div className="container flex-wrap mt-5">
                <div className="row">
                    <div className="col-sm-12 mb-5">
                        <div id="carouselExampleControls" className="col-sm-12 carousel carousel-image slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item  carousel-image active">
                                    <button className="btn btn-primary">Shop now</button>
                                    <img src="https://www.4recruitmentservices.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWdURnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3f14198dea9faae5e35f8426e130a16d2a756ad5/Fruits_and_vegetables.jpg" classname="d-block w-100" alt="..." />

                                </div>
                                <div className="carousel-item carousel-image">
                                    <button className="btn btn-primary">Shop now</button>
                                    <img src="https://i.ndtvimg.com/i/2017-10/fruits-and-vegetables-620x350_620x350_41507031507.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item carousel-image">
                                    <button className="btn btn-primary">Shop now</button>
                                    <img src="https://media.healthyfood.com/wp-content/uploads/2021/08/50-easy-ways-to-eat-more-fruit-and-veg-iStock-1225383160-500x409.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>


                    <div className=" col-lg-12 linehorizontal">
                        <div className="linewithsquare">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                    </div>
                </div>
            </div>






            <div>
                <Product Url={vegetableUrl} />
            </div>

        </div>

    )

}
export default vegetable;