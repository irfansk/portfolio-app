import Image from 'next/image'
import Header from './view/Header'
import Footer from './view/Footer'
import { skillList } from '@/components/data/constants'
import styles from '@/styles/skills.module.scss'
interface Skills {
  title: string,
  color?: string,
  img?: string,
  id: number,
}

export default function skills() {
  
  return (
    <>
    <Header />
    <div className={styles.main_skills_container} id='skills'>
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className={styles.skills_container}>
        {skillList.map(skill => {
          return (
            <div className={styles.skills_content} 
            // style={{background: `${skill.color}`}}
              key={skill.id}>
              <Image
                width={60}
                height={60} 
                src={skill.img} 
                alt={skill.title}
              />
              <h4>{skill.title}</h4>
              <span className={styles.skill_border} ></span>
            </div>
          )
        })}
      </div>
    </div>
    <Footer />
    </>
  )
}