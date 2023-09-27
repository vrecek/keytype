import ImageOptions from "@/interfaces/Common/ImageTypes"


const Image = ({ src, altTxt, cname, clickFn }: ImageOptions) => {
    return (
        <figure className={ cname } onClick={ clickFn }>

            <img
                src={src}
                alt={altTxt ?? 'Image'}
                loading='lazy'
            />

        </figure>
    )
}


export default Image