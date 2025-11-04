'use client'

import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  telefone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('E-mail inválido'),
  comoEncontrou: z.string().min(1, 'Selecione uma opção'),
  jaParticipou: z.enum(['sim', 'nao'] as const, {
    message: 'Selecione uma opção',
  }),
  interesse: z.string().min(1, 'Selecione uma opção'),
})

type FormData = z.infer<typeof formSchema>

export default function Form() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formspree.io/f/mwpwrgye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <div
      className="flex flex-col bg-[url('../public/deserto.webp')] relative bg-center bg-cover min-h-screen py-11 px-6"
      id="form"
    >
      <div className="flex flex-col gap-8 items-center z-10 max-w-md mx-auto w-full">
        <h1 className="text-cream text-4xl font-family-arizona-sans font-bold tracking-tighter max-w-[220px] text-justify">
          Um convite à liberdade de ser, sentir e se reconectar com o que pulsa
          em silêncio dentro de você.
        </h1>

        {/* Investimento */}
        <div className="flex flex-col items-center gap-3">
          <span className="border-2 uppercase font-bold tracking-tighter text-2xl border-cream-light rounded-full px-4 py-1 text-cream font-family-arizona-sans">
            investimento: R$3.500
          </span>
          <p className="font-thin tracking-tight text-center text-cream font-family-arizona-sans text-xl">
            Parcelamento: <br />
            3x de R$1.130 <br />
            6x de R$685
          </p>
        </div>

        {/* Mensagem de sucesso/erro */}
        {submitStatus === 'success' && (
          <div className="w-full bg-green-500/20 border border-green-500 text-cream-light p-4 rounded-lg text-center font-arizona-sans">
            ✓ Inscrição enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="w-full bg-red-500/20 border border-red-500 text-cream-light p-4 rounded-lg text-center font-arizona-sans">
            ✗ Erro ao enviar. Tente novamente.
          </div>
        )}

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          {/* Nome */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="nome"
              className="text-cream-light font-family-arizona-flare  font-light"
            >
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              {...register('nome')}
              className="bg-cream-light/90 text-brown-dark px-3 py-2 rounded font-family-arizona-flare focus:outline-none focus:ring-2 focus:ring-tan"
              placeholder="Seu nome"
            />
            {errors.nome && (
              <span className="text-red-300 text-xs font-family-arizona-sans">
                {errors.nome.message}
              </span>
            )}
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="telefone"
              className="text-cream-light font-light font-family-arizona-flare "
            >
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              id="telefone"
              {...register('telefone')}
              className="bg-cream-light/90 text-brown-dark px-3 py-2 rounded font-family-arizona-flare focus:outline-none focus:ring-2 focus:ring-tan font-light"
              placeholder="(00) 00000-0000"
            />
            {errors.telefone && (
              <span className="text-red-300 text-xs font-family-arizona-sans">
                {errors.telefone.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-cream-light font-family-arizona-flare font-light "
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="bg-cream-light/90 text-brown-dark px-3 py-2 rounded font-family-arizona-flare font-light focus:outline-none focus:ring-2 focus:ring-tan"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <span className="text-red-300 text-xs font-family-arizona-sans">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="comoEncontrou"
              className="text-cream-light font-family-arizona-flare "
            >
              Como nos encontrou?
            </label>
            <select
              id="comoEncontrou"
              {...register('comoEncontrou')}
              className="bg-cream-light/90 text-brown-dark px-3 py-2 rounded font-family-arizona-sans focus:outline-none focus:ring-2 focus:ring-tan font-light"
            >
              <option className="font-family-arizona-sans font-light" value="">
                Selecione uma opção
              </option>
              <option
                className="font-family-arizona-sans font-light"
                value="anuncio"
              >
                Anúncio
              </option>
              <option
                className="font-family-arizona-sans font-light"
                value="recomendacao"
              >
                Recomendação
              </option>
              <option
                className="font-family-arizona-sans font-light"
                value="instagram"
              >
                Instagram
              </option>
            </select>
            {errors.comoEncontrou && (
              <span className="text-red-300 text-xs font-family-arizona-sans">
                {errors.comoEncontrou.message}
              </span>
            )}
          </div>

          {/* Já participou */}
          <div className="flex flex-col gap-3">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-cream-light font-light mx-auto font-family-arizona-sans ">
              Já participou de alguma experiência como esta?
            </label>
            <div className="flex mx-auto gap-4">
              <label className="flex items-center gap-1 text-cream-light font-family-arizona-sans cursor-pointer">
                <input
                  type="radio"
                  value="sim"
                  {...register('jaParticipou')}
                  className="w-4 h-4 accent-tan"
                />
                Sim!
              </label>
              <label className="flex items-center gap-1 text-cream-light font-family-arizona-sans cursor-pointer">
                <input
                  type="radio"
                  value="nao"
                  {...register('jaParticipou')}
                  className="w-4 h-4 accent-tan"
                />
                Ainda não
              </label>
            </div>
            {errors.jaParticipou && (
              <span className="text-red-300 text-xs font-family-arizona-sans text-center">
                {errors.jaParticipou.message}
              </span>
            )}
          </div>
          {/* Escolha uma opção */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="interesse"
              className="text-cream-light font-family-arizona-flare font-light"
            >
              Escolha uma opção
            </label>
            <select
              id="interesse"
              {...register('interesse')}
              className="bg-cream-light/90 text-brown-dark px-3 py-2 rounded font-family-arizona-sans focus:outline-none focus:ring-2 focus:ring-tan font-thin"
            >
              <option className="font-family-arizona-sans font-light" value="">
                Selecione uma opção
              </option>
              <option
                className="font-family-arizona-sans font-light"
                value="quero-mais-informacoes"
              >
                Quero mais informações para esta imersão
              </option>
              <option
                className="font-family-arizona-sans font-light"
                value="avisar-proxima"
              >
                Me avise da próxima imersão
              </option>
            </select>
            {errors.interesse && (
              <span className="text-red-300 text-xs font-arizona-sans">
                {errors.interesse.message}
              </span>
            )}
          </div>
          {/* Botão Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="uppercase rounded-sm font-medium text-brown-dark font-family-arizona-flare bg-tan text-xl px-4 py-6 mx-auto mt-4 hover:bg-tan/90 transition-colors w-fit disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'quero expandir'}
          </Button>
        </form>

        {/* Logos */}
        <div className="flex justify-between items-baseline w-full mt-8 px-10">
          <Image src={'/losninos.png'} alt={''} width={104} height={21} />
          <Image src={'/brain.png'} alt={''} width={59} height={26} />
        </div>

        {/* Link de dúvidas */}
        <a
          href="https://wa.me/5541987392252"
          target="_blank"
          className="underline text-cream-light font-light font-family-arizona-sans text-center"
          rel="noreferrer"
        >
          Dúvidas? <span className="font-bold">Clique aqui</span> para falar com
          a gente
        </a>
      </div>
    </div>
  )
}
