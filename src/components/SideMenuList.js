import { Link } from "react-router-dom";
import { selectCars } from '../features/car/carSlice';
import { useSelector } from "react-redux";

const SideMenuList = () => {
  const cars = useSelector(selectCars);
  return (
    <div>
      {cars && cars.map((model,i) => {
          const modelPath =model.toLowerCase().replace(/\s+/g, ''); //소문자변경 & 공백제거
          return (
            <Link to={`/${modelPath}`}>
              <li key={i}>{model}</li>
            </Link>
          );
        })}
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>Cybertruck</li>
        <li>Roadaster</li>
    </div>
  )
}

export default SideMenuList