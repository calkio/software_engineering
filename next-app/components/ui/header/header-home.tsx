import React from 'react'
import { Button } from '../button'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import Link from 'next/link'
import styles from './styles.module.css'

const HeaderHome = () => {
  return (
    <header className={styles.header}>
      <Button className={styles.button}>Новая задача</Button>

      <Button className={styles.button} asChild>
        <Link href="/login">Зарегистрироваться</Link>
      </Button>

      <Avatar className={styles.button}>
        <AvatarImage src="/img/black_men.png" alt="Black Men" />
        <AvatarFallback>calkio</AvatarFallback>
      </Avatar>

      <Button className={styles.button_exit} variant="destructive">Выйти</Button>
    </header>
  )
}

export default HeaderHome
