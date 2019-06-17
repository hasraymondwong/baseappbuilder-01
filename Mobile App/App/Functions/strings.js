import { Localization } from 'expo-localization';
import i18n from 'i18n-js';

const en={
    variant_not_available:"Selected variant is not available",
    no_variant_available:"No variant available",
    cart:"Cart",
    delivery:"Delivery",
    payment:"Payment",
    summary:"Summary",
    price:"Price: ",
    empty_cart: "Your cart is empty.",
    enter_name: "Enter your name",
    enter_address: "Enter your address",
    notification_email: "Notification email",
    contact: "Contact phone",
    about_oreder: "Something special about the order",
    back: "Go Back",
    go_payment:'Go to payment',
    pay: 'Pay',
    status: "Status:",
    approved:"approved",
    canceled: "canceled",
    overview:'Overview',
    thanks:"Thanks!",
    cancel:"Cancel",
    order_processed: "Your order is beeing processed now. You can follow the status of it in the Orders section.",
    no_items: 'There are no items to display',
    ingredients:'Ingredients',
    no_orders: "There are no orders",
    no_categories: "There are no categories",
    next: "Next",
    name: "Name",
    address: "Address",
    email: "Email",
    password: "Password",
    phone: "Phone",
    notes: "Notes",
    CODselected: "You will pay when goods are delivered to your address",
    choosePayment: "Choose payment method",
    searchBarText: "Type here....",
    event: "Event",
    visitor: "Visitor",
    register: "Register",
    no_notifications: "There are no notifications",
    user: "User:",
    orderID: "Order ID:",
    quantity: "Quantity: ",
    alreadyHaveAccount: " Already a member? Login ",
    createAccount: "Create an Account",
    login: "Login",
    forgetPass: "Forgot password?",
    enterPass:'Enter your password',
    enterMail:'Enter your email',
    enterUsername:'Enter your username',
    logout: "Log out",
    username:'username',
    register:'Register',
    becomeMember:'Become a member',
    forgetPassEmail:'Enter your email below to recive your password reset instuctions',
    forgetPassInView:'Forgot Password?',
    sendPass:'Send password',
    profileUpdate:"Update your profile",
    description:"description",
    enterDesc:"Enter your description",
    facebook:"facebook",
    enterfb:"fb.com/yourName",
    enterInsta:"@yourName",
    instagram:"instagram",
    bio:"Biography",
    enterBio:"Enter your biography",
    posts:'Posts',
    followers:'Followers',
    following:'Following',
    about:"About",
    firstAndLastname:"First and last name",
    enterFullname:"Enter your first and last name",
    follow:"Follow",
    unfollow:"Unfollow",
    orderStatus:"Status of the order:",
    userWithNoAccess:"This user doesn't have permissions to use the application. Please try again with different user.",
    enterContactName:"Enter contact name",
    contactName:"Contact name",
    find:"Find"
  };
const es={
    variant_not_available:"La variante seleccionada no está disponiblee",
    no_variant_available:"No variante disponiblee",
    cart:"Carrito",
    delivery:"Entrega",
    payment:"Pago",
    summary:"Resumen"
  };

i18n.fallbacks = true;
i18n.translations = { en, es };
i18n.locale = Localization.locale;

exports.expo=en;
if(Localization.locale+""=="es"){
  exports.expo=es;
}
