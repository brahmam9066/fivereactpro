import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import Input from "antd/lib/input/Input";
import { Col, Row } from "antd";

function Api() {
    const [meals, setMeals] = useState([]);
    const [dupMeals, setDupMeals] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(
                    "https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian"
                );
                console.log(res);
                setMeals(res.data.meals);
                setDupMeals(res.data.meals);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);
    function searchItems(val) {
        var filteredItems = dupMeals.filter((meal) =>
            meal.strMeal.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
        setMeals(filteredItems)

    }
    return (
        <Dashboard>
            <div className="m-2">
                <Input
                    style={{ width: "30%", marginleft: 50 }}
                    placeholder="search items"
                    onChange={(e) => searchItems(e.target.value)}
                />
                <Row gutter={16} justify="center" className="mt-5">
                    {meals.map((meal) => {
                        return (
                            <Col lg={5} sm={24} className="text-center bs m-4">
                                <b>
                                    <p>{meal.strMeal}</p>
                                </b>
                                <img src={meal.strMealThumb} alt="" height="200" />
                                <p>Id:{meal.idMeal}</p>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Dashboard>
    );
}

export default Api;
