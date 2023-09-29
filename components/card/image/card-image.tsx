import Image from "next/image";

type Props = {
    image: string;
    alt?: string;
    className?: string;
}

const CardImage = ({ image, alt, className}: Props) => {
    return (
        <div className={`relative ${className ?? 'w-[320px] h-[200px]'}`}>
            <Image src={image} alt={alt ?? 'card-alt-image'} fill style={{ objectFit: 'cover' }}/>
        </div>
    )
}

export default CardImage;
