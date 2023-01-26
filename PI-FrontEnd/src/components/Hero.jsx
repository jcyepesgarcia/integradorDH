import React, { useState, useEffect } from "react";
import styles from "./modules/hero.module.css";
import cityData from "../utils/cities.json";
import { IoSearchCircle } from "react-icons/io5";

export const Hero = () => {

    //=> Controlled components of the form
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  
    //=> boolean value states used to validate form fields
    const [cityIsEmpty, setcityIsEmpty] = useState(false);
    const [startDateIsEmpty, setStartDateIsEmpty] = useState(false);
    const [endDateIsEmpty, setEndDateIsEmpty] = useState(false);
    const [timeIsBeforeStartTime, setTimeIsBeforeStartTime] = useState(false);
  
    //=> state with screen width measurement
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  
    //=> current date as string data
    const [currentDate, setCurrentDate] = useState(getCurrentDate);
  
    //=> form event handler
    function onSubmitForm(e) {
      e.preventDefault();
      if (city === "" || city === "Choose a city") {
        setcityIsEmpty(true);
      }
      if (startDate === "") {
        setStartDateIsEmpty(true);
      }
      if (endDate === "") {
        setEndDateIsEmpty(true);
      }
      const startDateToUnix = Date.parse(startDate);
      const endDateToUnix = Date.parse(endDate);
      if (startDateToUnix > endDateToUnix) {
        setTimeIsBeforeStartTime(true);
        return;
      }
    }

    function onBlurhandler() {
      if (city === "" || city === "Choose a city") {
        setcityIsEmpty(true);
      } else {
        setcityIsEmpty(false);
      }
    }

    //=> Functions for obtaining and formatting the current date to be used in the "min" attribute of date inputs.
    function formatCurrentDate(date, format) {
      const map = {
        dd: date.getDate(),
        mm: date.getMonth() + 1,
        yy: date.getFullYear().toString(),
        yyyy: date.getFullYear(),
      };
      return format.replace(/yy|mm|dd|yyy/gi, (matched) => map[matched]);
    }

    function getCurrentDate() {
      const today = new Date();
      if (today.getMonth() + 1 < 10) {
        return formatCurrentDate(today, "yy-0mm-dd");
      }
      return formatCurrentDate(today, "yy-mm-dd");
    }

    useEffect(() => {
      setCurrentDate(getCurrentDate())
    }, [])

    //=> getting screen width as a side effect
    useEffect(() => {
      function handleResize() {
        setInnerWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return ()=> {
        window.removeEventListener("resize", handleResize);
      }
    }, []);

    return (
      <section className={styles.hero__container}>
        <div className={styles.hero__info}>
          <h1 className={styles.hero__title}>Find a car for your needs</h1>
          <p className={styles.hero__text}>in the best car rental in Colombia</p>
        </div>

        <form action="" className={styles.hero__form} onSubmit={onSubmitForm}>
          <div className={styles.city__selector__container}>
            <label htmlFor="cities">Where</label>
            <select
              name="cities"
              id="cities"
              onChange={(e) => setCity(e.target.value)}
              onBlur={onBlurhandler}
            >
              {cityData.map((city) => (
                <option value={city.name} key={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            {cityIsEmpty && <small className={styles.error}>Choose a city</small>}
          </div>

          <div className={styles.start__date__input}>
            <div className={styles.dateInput}>
              <label htmlFor="from">From</label>
              <input
                type="date"
                name="from"
                id="from"
                min={currentDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setStartDateIsEmpty(false);
                }}
              />
            </div>
            {startDateIsEmpty && (
              <small className={styles.error}>Please enter starting date</small>
            )}
          </div>

          <div className={styles.end__date__input}>
            <div className={styles.dateInput}>
              <label htmlFor="until">Until</label>
              <input
                type="date"
                name="until"
                id="until"
                min={currentDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setEndDateIsEmpty(false);
                  setTimeIsBeforeStartTime(false);
                }}
              />
            </div>

              {endDateIsEmpty && (
              <small className={styles.error}>Please enter end date</small>
            )}

            {timeIsBeforeStartTime && (
              <small className={styles.error}>
                Please enter end date that is AFTER start date
              </small>
            )}
          </div>

          <button className={styles.btn} type="submit">
            {innerWidth > 732 ? (
              <IoSearchCircle className={styles.search_icon} />
            ) : (
              "Search a Car"
            )}
          </button>
        </form>
      </section>
    );
  }