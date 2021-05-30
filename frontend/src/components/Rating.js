import { useCallback } from 'react'
const fullStar = 'fas fa-star'
const halfStar = 'fas fa-star-half-alt'
const star = 'far fa-star'

function Rating({ value, text, color }) {
    const calculateRating = useCallback(() => {
        const rating = []
        let i = 0.5,
            j = 1
        for (let k = 0; k < 5; k++) {
            if (value >= j + k) {
                rating.push(fullStar)
            } else if (value >= i + k) {
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
