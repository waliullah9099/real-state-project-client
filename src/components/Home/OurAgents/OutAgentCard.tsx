"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, X } from "lucide-react"
import gsap from "gsap"

interface AgentCardProps {
  id?: string
  name?: string
  position?: string
  image?: string
  email?: string
  phone?: string
}

export default function AgentCard({
  id = "1",
  name = "Tahar Smith",
  position = "Administrative Staff",
  image = "https://homelengohtml.vercel.app/images/agents/agent-2.jpg",
  email = "tahar@example.com",
  phone = "+1 234 567 8900",
}: AgentCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<string | null>(null)

  const cardRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const toggleModal = (content: string | null) => {
    setModalContent(content)
    setIsOpen(!!content)
  }

  // GSAP animations
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
    }
  }, [])

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
      )
    }
  }, [isOpen])

  // Hover animations
  const handleMouseEnter = () => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current.querySelector("img"), {
        scale: 1.1,
        duration: 0.7,
        ease: "power2.out",
      })
      gsap.to(imageContainerRef.current.querySelector(".overlay"), {
        opacity: 1,
        duration: 0.5,
      })
      gsap.to(imageContainerRef.current.querySelector(".details-button"), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
      })
    }
  }

  const handleMouseLeave = () => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current.querySelector("img"), {
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      })
      gsap.to(imageContainerRef.current.querySelector(".overlay"), {
        opacity: 0,
        duration: 0.5,
      })
      gsap.to(imageContainerRef.current.querySelector(".details-button"), {
        y: 20,
        opacity: 0,
        duration: 0.3,
      })
    }
  }

  return (
    <div ref={cardRef} className="group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
        <Link href={`/Agent/${id}`}>
          <div
            ref={imageContainerRef}
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image container with proper aspect ratio */}
            <div className="aspect-[4/3] w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="overlay absolute inset-0 bg-gradient-to-t from-[#1563DF]/80 to-transparent opacity-0" />
            </div>

            {/* Button that appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="details-button transform translate-y-8 opacity-0">
                <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#1563DF] to-[#0A4BB5] rounded-full shadow-lg hover:shadow-[#1563DF]/30 transform hover:scale-105 transition-all duration-300">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </Link>

        {/* Agent info section */}
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#1563DF]">{name}</h3>
              <p className="text-sm font-medium text-gray-500">{position}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleModal(`Call: ${phone}`)}
                className="p-2.5 border-2 border-[#1563DF] rounded-full text-[#1563DF] hover:bg-[#1563DF] hover:text-white transition-all duration-300 transform hover:rotate-12"
                aria-label="Call agent"
              >
                <Phone size={18} />
              </button>
              <button
                onClick={() => toggleModal(`Email: ${email}`)}
                className="p-2.5 border-2 border-[#1563DF] rounded-full text-[#1563DF] hover:bg-[#1563DF] hover:text-white transition-all duration-300 transform hover:rotate-12"
                aria-label="Email agent"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && modalContent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => toggleModal(null)}
          style={{
            animation: "fadeIn 0.3s ease-out forwards",
          }}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-sm relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => toggleModal(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} className="text-gray-600" />
            </button>

            <div className="mt-2 text-center">
              <div className="inline-block p-3 bg-[#1563DF]/10 rounded-full mb-4">
                {modalContent?.startsWith("Call") ? (
                  <Phone className="h-6 w-6 text-[#1563DF]" />
                ) : (
                  <Mail className="h-6 w-6 text-[#1563DF]" />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-1">Contact Information</h3>
              <p className="text-gray-700">{modalContent}</p>

              <button
                className="mt-6 w-full py-2.5 bg-[#1563DF] text-white rounded-lg font-medium hover:bg-[#0A4BB5] transition-colors"
                onClick={() => toggleModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
