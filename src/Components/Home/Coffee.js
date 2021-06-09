import React from 'react';
import pic1 from '../../../images/1.jpg';
import pic2 from '../../../images/2.jpg';
import pic3 from '../../../images/3.jpg';
import pic4 from '../../../images/4.jpg';

const Coffee = () => {

    return (
        <div className=" grid grid-rows-3 gap-4 md:grid-flow-col text-white">
        <div className="menu-card p-12">
            <img src={pic1} alt="mutton" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Mutton Platter</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Vegetable Salad</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$20</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Breakfast Platter</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$12</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Shrimp Platter</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$35</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Mutton Curry</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$45</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1497888329096-51c27beff665?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Healthy Breakfast with Mixed Fruit</h2>
                <p className="mb-2">Healthy, delicious, and nutritious</p>
                <span>$25</span>
            </div>
        </div>

        </div>
    );
};

export default Coffee;
