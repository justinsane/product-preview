import React from "react";

function App() {
  return (
    <div className=" flex w-full max-w-xl flex-col rounded-xl bg-white shadow-md md:flex-row">
      <div className=" md:w-1/2">
        <img
          src="public/image-product-desktop.jpg"
          alt="Image Product"
          className="h-80 w-full rounded-t-xl object-cover md:h-auto md:rounded-l-xl md:rounded-t-none"
        />
      </div>
      <div className="flex w-full flex-col pb-6 pl-6 pr-8 pt-6 md:w-1/2">
        <p className="text-xs uppercase tracking-widest text-dark-grayish-blue">
          Perfume
        </p>
        <h1 className="pr-3 font-serif text-3xl font-bold text-very-dark-blue md:pr-12 md:pt-3">
          Gabrielle Essence Eau De Perfum
        </h1>
        <p className="pr- pt-4 text-dark-grayish-blue md:pr-6">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mt-4 flex flex-row">
          <p className="font-serif text-2xl font-bold text-dark-cyan">
            $149.99
          </p>
          <p className="self-center pl-3 text-dark-grayish-blue line-through">
            $169.99
          </p>
        </div>
        <a
          href="http://www.google.com"
          target="_blank"
          className="mt-4 flex justify-center rounded-lg bg-dark-cyan p-3 text-white hover:bg-very-dark-blue"
        >
          <img src="/icon-cart.svg" alt="Cart icon" className="mr-3 w-4" />
          <span className="font-bold">Add to Cart</span>
        </a>
      </div>
    </div>
  );
}

export default App;
