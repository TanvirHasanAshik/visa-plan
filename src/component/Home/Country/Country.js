
import './Country.css';
const Country = ({ country, handleCountryDetails }) => {
    console.log(country);
    const { name, description, image, id } = country;

    return (
        <div onClick={() => handleCountryDetails(id)} className='col-md-4 col-sm-6 col-12 country'>
            <img className='w-100' src={image} alt="" />
            <div className="country-card text-center text-white">
                <h6>{name}</h6>
                <p>{description.slice(0, 150)}</p>
            </div>
        </div >
    );
};

export default Country;