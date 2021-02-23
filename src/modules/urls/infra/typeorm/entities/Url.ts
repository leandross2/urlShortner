import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { Exclude, Expose } from 'class-transformer';

@Entity('urls')
class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  url: string

  @Column()
  url_short: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'shortUrl' })

  getshort_url(): string {
    return `${process.env.API_URL}${this.url_short}`
  }
}

export default Url
