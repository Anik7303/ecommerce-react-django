import { useCallback } from 'react'

const fullStar = 'fas fa-star'
const halfStar = 'fas fa-star-half-alt'
const star = 'far fa-star'

function Rating({ value, text, color }) {
    const calculateRating = useCallback(() => {
        let rating = []
        for (let i = 0; i < 5; i++) {
            if (value >= i + 1) {
                rating.push(fullStar)
            } else if (value >= i + 0.5) {
                rating.push(halfStar)
            } else {
                rating.push(star)
            }
        }
        return rating
    }, [value])

    return (
        <div className="rating">
            {calculateRating().map((item, index) => (
                <span key={index}>
                    <i style={{ color }} className={item}></i>
                </span>
            ))}
            <span>{text && text}</span>
        </div>
    )
}

export default Rating
