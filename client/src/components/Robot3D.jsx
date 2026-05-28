import { useEffect, useRef, useState } from 'react'

export default function Robot3D() {
  const containerRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let isMounted = true
    
    const init3D = async () => {
      try {
        // Dynamic imports to avoid issues
        const THREE = await import('three')
        
        if (!containerRef.current || !isMounted) return
        
        const container = containerRef.current
        const width = container.clientWidth
        const height = container.clientHeight
        
        // Scene setup
        const scene = new THREE.Scene()
        
        // Camera
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
        camera.position.set(0, 0, 8)
        
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        container.appendChild(renderer.domElement)
        
        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
        scene.add(ambientLight)
        
        const pointLight1 = new THREE.PointLight(0x3b82f6, 1.5)
        pointLight1.position.set(10, 10, 10)
        scene.add(pointLight1)
        
        const pointLight2 = new THREE.PointLight(0x8b5cf6, 1)
        pointLight2.position.set(-10, -10, -5)
        scene.add(pointLight2)
        
        // Robot Group
        const robot = new THREE.Group()
        scene.add(robot)
        
        // Materials
        const headMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x3b82f6, 
          metalness: 0.5, 
          roughness: 0.3 
        })
        const bodyMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x1e40af, 
          metalness: 0.4, 
          roughness: 0.4 
        })
        const eyeMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x10b981, 
          emissive: 0x10b981, 
          emissiveIntensity: 0.8 
        })
        const lightMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xf59e0b, 
          emissive: 0xf59e0b, 
          emissiveIntensity: 1.2 
        })
        
        // Head
        const headGeometry = new THREE.BoxGeometry(1.4, 1.2, 1.4)
        const head = new THREE.Mesh(headGeometry, headMaterial)
        head.position.y = 2.5
        robot.add(head)
        
        // Eyes
        const eyeGeometry = new THREE.SphereGeometry(0.12, 16, 16)
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
        leftEye.position.set(-0.35, 2.6, 0.75)
        robot.add(leftEye)
        
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
        rightEye.position.set(0.35, 2.6, 0.75)
        robot.add(rightEye)
        
        // Antenna
        const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8)
        const antennaMaterial = new THREE.MeshStandardMaterial({ color: 0x64748b })
        const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial)
        antenna.position.set(0, 3.3, 0)
        robot.add(antenna)
        
        const antennaBall = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.5 })
        )
        antennaBall.position.set(0, 3.6, 0)
        robot.add(antennaBall)
        
        // Body
        const bodyGeometry = new THREE.BoxGeometry(2, 2.2, 1.2)
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
        robot.add(body)
        
        // Chest light
        const chestGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.08, 32)
        const chest = new THREE.Mesh(chestGeometry, lightMaterial)
        chest.position.set(0, 0.3, 0.65)
        robot.add(chest)
        
        // Arms
        const armGeometry = new THREE.CylinderGeometry(0.25, 0.25, 1.8, 16)
        const armMaterial = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.5 })
        
        const leftArm = new THREE.Mesh(armGeometry, armMaterial)
        leftArm.position.set(-1.4, 0.8, 0)
        robot.add(leftArm)
        
        const rightArm = new THREE.Mesh(armGeometry, armMaterial)
        rightArm.position.set(1.4, 0.8, 0)
        robot.add(rightArm)
        
        // Animation
        let time = 0
        const animate = () => {
          if (!isMounted) return
          
          time += 0.016
          
          // Float animation
          robot.position.y = Math.sin(time * 0.8) * 0.3
          
          // Rotate
          robot.rotation.y = Math.sin(time * 0.5) * 0.2
          
          // Arms swing
          leftArm.rotation.z = Math.sin(time * 1.5) * 0.3 + 0.3
          rightArm.rotation.z = -Math.sin(time * 1.5) * 0.3 - 0.3
          
          renderer.render(scene, camera)
          requestAnimationFrame(animate)
        }
        
        animate()
        setIsReady(true)
        
        // Handle resize
        const handleResize = () => {
          if (!containerRef.current) return
          const newWidth = containerRef.current.clientWidth
          const newHeight = containerRef.current.clientHeight
          camera.aspect = newWidth / newHeight
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, newHeight)
        }
        
        window.addEventListener('resize', handleResize)
        
        return () => {
          window.removeEventListener('resize', handleResize)
          renderer.dispose()
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement)
          }
        }
      } catch (error) {
        console.error('3D Robot initialization failed:', error)
        setIsReady(false)
      }
    }
    
    init3D()
    
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}
    />
  )
}
