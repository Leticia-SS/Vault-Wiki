import Wind from '../../assets/Wind_Type.png'
import Water from '../../assets/Water_Type.png'
import Typeless from '../../assets/Typeless.png'
import Steel from '../../assets/Steel_Type.png'
import Soul from '../../assets/Soul_Type.png'
import Rock from '../../assets/Rock_Type.png'
import Poison from '../../assets/Poison_Type.png'
import Normal from '../../assets/Normal_Type.png'
import Nature from '../../assets/Nature_Type.png'
import Mystic from '../../assets/Mystic_Type.png'
import Monster from '../../assets/Monster_Type.png'
import Mind from '../../assets/Mind_Type.png'
import Magic from '../../assets/Magic_Type.png'
import Light from '../../assets/Light_Type.png'
import Ice from '../../assets/Ice_Type.png'
import Hive from '../../assets/Hive_Type.png'
import Heart from '../../assets/Heart_Type.png'
import Ground from '../../assets/Ground_Type.png'
import Fire from '../../assets/Fire_Type.png'
import Electric from '../../assets/Electric_Type.png'
import Dark from '../../assets/Dark_Type.png'
import Auto from '../../assets/Auto_Type.png'
import Armor from '../../assets/Armor_Type.png'
import '../Cast.css'

const typeToImage = { 
    Wind: Wind,
    Water: Water,
    Typeless: Typeless,
    Steel: Steel,
    Soul: Soul,
    Rock: Rock,
    Poison: Poison,
    Normal: Normal,
    Nature: Nature,
    Mystic: Mystic,
    Monster: Monster,
    Mind: Mind,
    Magic: Magic,
    Light: Light,
    Ice: Ice,
    Hive: Hive,
    Heart: Heart,
    Ground: Ground,
    Fire: Fire,
    Electric: Electric,
    Dark: Dark,
    Auto: Auto,
    Armor: Armor,
 }

 const TypeImage = ({ types }) => {
    return (
        <div className="type-images">
           {types.map((type, index) => (
            <div key={index} className="type-image">
            {typeToImage[type] && (
                <img 
                src={typeToImage[type]} 
                alt={type} 
                width="40"
                height="40"
                />
            )}
            </div>
            ))}
        </div>
      );
 }

 export default TypeImage