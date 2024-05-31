import useInView from '../../custom-hooks/useInView';
import './Title.css'

interface TitleProps {
  title: string,
  subtitle: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  subtitle
}) => {
  const [ref, isInView] = useInView({
    threshold: 0  // Ajusta el umbral según sea necesario
  });
  return (
      <div 
        ref={ref} 
        className={`title-holder ${isInView ? 'animate-title' : ''}`}
      >
        <h2>{title}</h2>
        <div className='subtitle'>{subtitle}</div>
      </div>
  )
}
