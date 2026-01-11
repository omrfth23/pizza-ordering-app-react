import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPizzaOrder } from "../api/pizza";

import NameField from "../components/order/NameField";
import SizeSelector from "../components/order/SizeSelector";
import IngredientsSelector from "../components/order/IngredientsSelector";
import NoteField from "../components/order/NoteField";
import OrderFooter from "../components/order/OrderFooter";
import Footer from "../components/footer/Footer";

const INGREDIENTS = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const BASE_PRICE = 85.5;
const SIZE_PRICE = { S: -10, M: 0, L: 15 };
const DOUGH_PRICE = { İnce: 0, Normal: 0, Kalın: 5 };
const INGREDIENT_PRICE = 5;
const logo = new URL(
    "../../images/iteration-1-images/logo.svg",
    import.meta.url
  ).href;

export default function Order() {
  const navigate = useNavigate();

  // UI
  const pizzaImage = "images\\iteration-2-images\\pictures\\form-banner.png";

  // form state
  const [name, setName] = useState("");
  const [size, setSize] = useState(""); // S/M/L
  const [dough, setDough] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [isValid, setIsValid] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  // pricing
  const sizeDelta = useMemo(() => (size ? SIZE_PRICE[size] ?? 0 : 0), [size]);
  const doughDelta = useMemo(
    () => (dough ? DOUGH_PRICE[dough] ?? 0 : 0),
    [dough]
  );
  const extrasPrice = useMemo(
    () => ingredients.length * INGREDIENT_PRICE,
    [ingredients]
  );

  const unitPrice = useMemo(
    () => BASE_PRICE + sizeDelta + doughDelta + extrasPrice,
    [sizeDelta, doughDelta, extrasPrice]
  );

  const totalPrice = useMemo(() => unitPrice * quantity, [unitPrice, quantity]);

  // validation
  useEffect(() => {
    const nameValid = name.trim().length >= 3;
    const sizeValid = size !== "";
    const doughValid = dough !== "";
    const ingredientValid = ingredients.length >= 4 && ingredients.length <= 10;
    setIsValid(nameValid && sizeValid && doughValid && ingredientValid);
  }, [name, size, dough, ingredients]);

  // handlers
  const toggleIngredient = (item) => {
    setIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || isPosting) return;

    const payload = {
      name: name.trim(),
      size,
      dough,
      ingredients,
      note: note.trim(),
      quantity,
      basePrice: BASE_PRICE,
      sizeDelta,
      doughDelta,
      extrasPrice,
      unitPrice,
      price: totalPrice,
    };

    try {
      setIsPosting(true);
      const data = await createPizzaOrder(payload);
      console.log("API Response:", data);
      navigate("/success", { state: { api: data, order: payload } });
    } catch (err) {
      console.error("POST Error:", err);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <>
      <header className="topbar">
        <img src={logo} alt="Teknolojik Yemekler" className="orderLogo" />
      </header>

      <div className="page">
        <div className="container">
          <div className="heroPizzaWrap">
            <img className="heroPizza" src={pizzaImage} alt="pizza" />
          </div>

          <div className="breadcrumb">
            Anasayfa - <b>Sipariş Oluştur</b>
          </div>

          <div className="productTitle">Position Absolute Acı Pizza</div>

          <div className="productPriceRow">
            <div className="priceBig">85.50₺</div>
            <div className="productMeta">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>

          <p className="productDesc">
            Frontend Dev olarak hala position:absolute kullanıyorsan lol çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
            malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
            fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
            mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
            Küçük bir pizzaya bazen pizzetta denir.
          </p>

          <form onSubmit={handleSubmit}>
            <NameField value={name} onChange={setName} />

            <div className="twoColRow">
              <div>
                <label className="fieldLabel">
                  Boyut Seç <span className="reqStar">*</span>
                </label>

                <SizeSelector size={size} onChange={setSize} sizePriceMap={SIZE_PRICE} />
              </div>

              <div>
                <label className="fieldLabel">
                  Hamur Seç <span className="reqStar">*</span>
                </label>

                <select
                  className="select"
                  value={dough}
                  onChange={(e) => setDough(e.target.value)}
                >
                  <option value="" disabled>
                    — Hamur Kalınlığı Seç —
                  </option>
                  {Object.keys(DOUGH_PRICE).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sectionTitle">Ek Malzemeler</div>
            <div className="sectionSub">
              En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
            </div>

            <IngredientsSelector
              items={INGREDIENTS}
              selected={ingredients}
              onToggle={toggleIngredient}
              max={10}
            />

            <div className="sectionTitle">Sipariş Notu</div>
            <NoteField value={note} onChange={setNote} />

            <OrderFooter
              isValid={isValid}
              isPosting={isPosting}
              quantity={quantity}
              setQuantity={setQuantity}
              extrasPrice={extrasPrice}
              totalPrice={totalPrice}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
