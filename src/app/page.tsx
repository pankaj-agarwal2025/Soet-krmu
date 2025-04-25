"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  Briefcase,
  BookOpen,
  Menu,
  X,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-blue-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <GraduationCap size={32} /> */}
            <Image
              src="/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
              priority
            />
            <div>
              <h1 className="text-xl font-bold">K.R Mangalam University</h1>
              <p className="text-xs">School of Engineering and Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              target="_blank"
              className="hover:text-blue-200 transition duration-200"
            >
              Home
            </a>
            <a
              href="#projects"
              target="_blank"
              className="hover:text-blue-200 transition duration-200"
            >
              Developers
            </a>
            <a
              href="#portals"
              target="_blank"
              className="hover:text-blue-200 transition duration-200"
            >
              Portals
            </a>
            <a
              href="#faculty"
              target="_blank"
              className="hover:text-blue-200 transition duration-200"
            >
              Faculty
            </a>
            <a
              href="#contact"
              target="_blank"
              className="hover:text-blue-200 transition duration-200"
            >
              Contact
            </a>
            {/* <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">Apply Now</Button> */}
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800 p-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                target="_blank"
                className="hover:text-blue-200 transition duration-200 py-2"
              >
                Home
              </a>
              <a
                href="#about"
                target="_blank"
                className="hover:text-blue-200 transition duration-200 py-2"
              >
                About
              </a>
              <a
                href="#programs"
                target="_blank"
                className="hover:text-blue-200 transition duration-200 py-2"
              >
                Programs
              </a>
              <a
                href="#faculty"
                target="_blank"
                className="hover:text-blue-200 transition duration-200 py-2"
              >
                Faculty
              </a>
              <a
                href="#portals"
                target="_blank"
                className="hover:text-blue-200 transition duration-200 py-2"
              >
                Portals
              </a>
              <a
                href="#contact"
                target="_blank"
                className="hover:text-blue-200 transition duration-200 py-2"
              >
                Contact
              </a>
              {/* <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 w-full">Apply Now</Button> */}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                School of Engineering and Technology
              </h1>
              <p className="text-xl mb-6">
                Welcome to the SOET Portal — a centralized showcase of all live
                and deployed projects developed by students of the School of
                Engineering and Technology (SOET).
              </p>
              <div className="flex flex-wrap gap-4"></div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/kr.jpeg"
                  alt="KR Mangalam University Campus"
                  className="w-full h-auto object-cover"
                  width={1200} // High-res width
                  height={600} // Adjust as needed
                  priority
                />
                {/* Optional Overlay - only if you want */}
                <div className="absolute inset-0 bg-black/20" />
                {/* Optional Text */}
                <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-md">
                  KR Mangalam University
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold text-blue-900">12+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-blue-900">95%</p>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-blue-900">150+</p>
                <p className="text-gray-600">Faculty Members</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-blue-900">5000+</p>
                <p className="text-gray-600">Alumni Network</p>
              </div>
            </div>
          </div>
        </section>
        {/* Student Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Projects Developed by Students
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover innovative projects created by our talented students
                showcasing their skills and creativity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Card 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>CampusConnect</CardTitle>
                    <Badge className="bg-blue-600">CC</Badge>
                  </div>
                  <CardDescription>
                    Empowering Students, Streamlining Opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    CampusConnect is a platform developed for the Career
                    Development Centre (CDC) of K.R. Mangalam University. It
                    bridges the gap between students, CDC, and recruiters by
                    offering job listings, application tracking, CDC events, and
                    resume insights — all in one place.
                  </p>

                  {/* Team Members Section with Larger Images */}
                  <div className="flex justify-center gap-4 mb-4">
                    {/* Member 1 */}
                    <div className="text-center">
                      <div className="mb-2 ml-5">
                        <Avatar className="w-24 h-24 border-2 border-blue-200">
                          <Image
                            src="/khushnam.jpeg"
                            alt="Khushnam Chauhan"
                            width={124}
                            height={124}
                          />
                          <AvatarFallback className="text-lg">
                            KC
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Khushnam Chauhan</p>
                      <p className="text-xs text-gray-500">MCA 2023–25</p>
                      <Link
                        href="https://www.linkedin.com/in/khushnam-chauhan-58b25a2a5/"
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                      <div className="mb-2 ml-5">
                        <Avatar className="w-24 h-24 border-2 border-blue-200">
                          <AvatarImage
                            src="/apoorva.jpeg"
                            alt="Apoorva Sharma"
                          />
                          <AvatarFallback className="text-lg">
                            AS
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Apoorva Sharma</p>
                      <p className="text-xs text-gray-500">MCA 2023–25</p>
                      <Link
                        href="https://www.linkedin.com/in/apoorva-sharma-226861166/"
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>Alumni Management System</CardTitle>
                    <Badge className="bg-green-600">AMS</Badge>
                  </div>
                  <CardDescription>
                    This project help to interact between alumni and faculty
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    An intelligent system that leverages modern web technologies
                    to manage alumni data, enabling institutions to maintain
                    strong alumni relations and enhance engagement efficiently.
                  </p>

                  {/* Team Members Section with Larger Images */}
                  <div className="flex justify-center gap-4 mb-4">
                    {/* Member 1 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-green-200">
                          <AvatarImage
                            src="/rishabh.jpeg"
                            alt="Rishabh Rajput"
                            className=""
                          />
                          {/* <Image src="/rishabh.jpeg" alt='Khushnam Chauhan' width={200} height={200} /> */}
                          <AvatarFallback className="text-lg">
                            RR
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Rishabh Rajput</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/rishabh-rajput-727417207/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-green-200">
                          <AvatarImage
                            src="/manisha.jpeg"
                            alt="Vivek Mehta"
                            className="object-cover"
                          />
                          {/* <Image src="/manisha.jpeg" alt='Khushnam Chauhan' width={100} height={100}/> */}

                          <AvatarFallback className="text-lg">
                            MS
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Manisha Swain</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/manisha-swain-4717722b8/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>Campus Way</CardTitle>
                    <Badge className="bg-purple-600">CW</Badge>
                  </div>
                  <CardDescription>
                    The Way to the campuse for a new world
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    our project is about solving the problem faced by the
                    counselling department in conducting the interview of the
                    candidates as per their selected time slot and which was
                    earlier done manually.
                  </p>

                  {/* Team Members Section with Larger Images */}
                  <div className="flex justify-center gap-4 mb-4">
                    {/* Member 1 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-purple-200">
                          <AvatarImage
                            src="/dhananjay.jpeg"
                            alt="Dhananjay Munda"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg">
                            DM
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Dhananjay Munda</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/dhananjay-munda-5a79331b5/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-purple-200">
                          <AvatarImage
                            src="/priya.jpeg"
                            alt="Priya Dhuan"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg">
                            PD
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Priya Dhuan</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/priya-duhan-9a7523240"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 4 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>Faculty Teaching Hours</CardTitle>
                    <Badge className="bg-orange-600">FTH</Badge>
                  </div>
                  <CardDescription>
                    This project help to manage faculty teaching hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    A web-based portal for managing faculty teaching hours with
                    real-time Google Sheets synchronization, enabling efficient,
                    automated tracking, updates, and two-way data collaboration.
                  </p>

                  {/* Team Members Section with Larger Images */}
                  <div className="flex justify-center gap-4 mb-4">
                    {/* Member 1 */}
                    <div className="text-center">
                      <div className="mb-2 ml-5">
                        <Avatar className="w-24 h-24 border-2 border-orange-200">
                          <AvatarImage
                            src="/dimple.jpeg"
                            alt="Dimple Tanwar"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg">
                            DTR
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Dimple Tanwar Rajput</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={"https://www.linkedin.com/in/dimpletanwar15/"}
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-orange-200">
                          <AvatarImage
                            src="/ankush.jpeg"
                            alt="Ankush"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg">A</AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Ankush</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/ankush-kumar-54b676232/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 5 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>Project & Internship Management</CardTitle>
                    <Badge className="bg-teal-600">PIM</Badge>
                  </div>
                  <CardDescription>
                    This platform work securly manage students Internship
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    A centralized, faculty-login-based portal developed for KRMU
                    to securely manage student internships and projects with
                    document handling and report generation features.
                  </p>

                  {/* Team Members Section with Larger Images */}
                  <div className="flex justify-center gap-4 mb-4">
                    {/* Member 1 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-teal-200">
                          <AvatarImage
                            src="/palak.jpeg"
                            alt="Palak Jain"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg">
                            PJ
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Palak Jain</p>
                      <p className="text-xs text-gray-500">
                        Bsc Hons CS 2022-2025
                      </p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/palak-jain-6961722b1/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-teal-200">
                          <AvatarImage
                            src="/purvi.jpeg"
                            alt="Purvi Singhal"
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg">
                            PS
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Purvi Singhal</p>
                      <p className="text-xs text-gray-500">
                        Bsc Hons DS 2022-2025
                      </p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/purvi-singhal-94b9a724a/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Project Card 6 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle>SOET Main Portal</CardTitle>
                    <Badge className="bg-green-600">SMP</Badge>
                  </div>
                  <CardDescription>
                    This portal contains all the projects of SOET
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    This portal serves as a dynamic platform to highlight the
                    innovation, creativity, and technical skills of our student
                    developers. Each project listed here is not just a concept,
                    but a fully functional deployment.
                  </p>

                  {/* Team Members Section with Larger Images */}
                  <div className="flex justify-center gap-4 mb-4">
                    {/* Member 1 */}
                    <div className="text-center">
                      <div className="mb-2">
                        <Avatar className="w-24 h-24 border-2 border-green-200">
                          <AvatarImage
                            src="/rishabh.jpeg"
                            alt="Rishabh Rajput"
                            className=""
                          />
                          {/* <Image src="/rishabh.jpeg" alt='Khushnam Chauhan' width={200} height={200} /> */}
                          <AvatarFallback className="text-lg">
                            RR
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Rishabh Rajput</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/rishabh-rajput-727417207/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                      <div className="mb-2 ml-5">
                        <Avatar className="w-24 h-24 border-2 border-blue-200">
                          {/* <AvatarImage 
                    src="/khushnam.jpeg" 
                    alt="Khushnam Chauhan" 
                    className="object-cover"
                  /> */}
                          <Image
                            src="/khushnam.jpeg"
                            alt="Khushnam Chauhan"
                            width={124}
                            height={124}
                          />
                          <AvatarFallback className="text-lg">
                            KC
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="font-medium">Khushnam Chauhan</p>
                      <p className="text-xs text-gray-500">MCA 2023-2025</p>
                      <Link
                        href={
                          "https://www.linkedin.com/in/khushnam-chauhan-58b25a2a5/"
                        }
                        target="_blank"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Four Portals Section */}
        <section id="portals" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 |">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                SOET Portals
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access our integrated digital platforms designed to enhance your
                academic journey and professional connections.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* SOET Portal */}
              <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <CardTitle>Project & Internship Management Portal</CardTitle>
                  <CardDescription>Academic Resource Center</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-blue-600" />
                      Authorized Faculty Login.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-blue-600" />
                      Supports structured Excel Uploads.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-blue-600" />
                      Interactive tables for easy data tracking.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-blue-600" />
                      Simplifies Student data collection and management.
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://projects.soet-krmu.com/" target="_blank">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Access Project & Internship Management Portal
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Placement Portal */}
              <Card className="border-t-4 border-t-green-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Briefcase className="text-green-600" size={24} />
                  </div>
                  <CardTitle>CDC Portal</CardTitle>
                  <CardDescription>Career Development Hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Centralized Job Listings.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Resume Enhancement.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Automated CDC operations.
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Enhanced Employbility Support.
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://cdc.soet-krmu.com/" target="_blank">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Access CDC Portal
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Alumni Portal */}
              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>Alumni Management System</CardTitle>
                  <CardDescription>Graduate Network Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Alumni directory and networking
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Mentorship opportunities
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Alumni events and reunions
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Career advancement resources
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://alumini.soet-krmu.com/" target="_blank">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Access Alumni Portal
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <CardTitle>CampusWay-Counselor</CardTitle>
                  <CardDescription>
                    Guide applicants through the admission process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Track candidate progress from application to interview
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Assist in scheduling interviews with faculty
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Ensure candidates complete MCQ tests
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-purple-600" />
                      Career advancement resources
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://fth.offaxial.com" target="_blank">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Access Counselor/Teacher Portal
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-t-4 border-t-green-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Briefcase className="text-green-600" size={24} />
                  </div>

                  {/* FTH Portal */}
                  <CardTitle>FTH Portal</CardTitle>
                  <CardDescription>Faculty Teaching Hour</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Course data is stored batchwise
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Automatically updates the changed data{" "}
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Calculates Faculty load
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="mr-2 text-green-600" />
                      Finalize the teaching hours of the faculty{" "}
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="https://cdc.soet-krmu.com/" target="_blank">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Access FTH Portal
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Our Faculty
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn from distinguished professors and industry experts with
                years of academic and professional experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Faculty Member 1 */}
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-32 h-32">
                  <Image
                    src="/pankaj.webp"
                    alt="Professor"
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="font-bold text-lg">Dr. Pankaj Agarwal</h3>
                <p className="text-blue-800">
                  Professor & Dean – Engineering & Technology
                </p>
                <p className="text-sm text-gray-600">
                  Ph.D. in Computer Science
                </p>
              </div>

              {/* Faculty Member 2 */}
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-32 h-32">
                  <Image
                    src="/shweta.webp"
                    alt="Professor"
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="font-bold text-lg">Dr. Shweta Bansal</h3>
                <p className="text-blue-800">
                  HOD, Associate Professor – Engineering & Technology
                </p>
                <p className="text-sm text-gray-600">
                  Ph.D. in Artificial Intelligence
                </p>
              </div>

              {/* Faculty Member 3 */}
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-32 h-32">
                  <Image
                    src="/amar.webp"
                    alt="Professor"
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="font-bold text-lg">Dr. Amar Saraswat</h3>
                <p className="text-blue-800">
                  Assistant Professor – Engineering & Technology
                </p>
                <p className="text-sm text-gray-600">Ph.D. in VLSI Design</p>
              </div>

              {/* Faculty Member 4 */}
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-32 h-32">
                  <Image
                    src="/monika.webp"
                    alt="Professor"
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="font-bold text-lg">Dr. Monika Khatkar</h3>
                <p className="text-blue-800">
                  Assistant Professor – Engineering & Technology
                </p>
                <p className="text-sm text-gray-600">Ph.D. in Robotics</p>
              </div>
            </div>

            <div className="text-center mt-8">
              {/* <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                View All Faculty Members
              </Button> */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join KR Mangalam University School of Engineering and Technology
              for a future-ready education.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 text-lg py-6 px-8">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg py-6 px-8">
                Schedule a Campus Visit
              </Button>
            </div> */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our programs or admissions? Get in touch
                with us today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <span className="mr-3 mt-1">📍</span>
                    <span>
                      KR Mangalam University, Sohna Road, Gurugram, Haryana,
                      India - 122103
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📞</span>
                    <span>01148884888</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <span>soet.krmu.2013@gmail.com</span>
                  </p>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/krmuniv/"
                    target="_blank"
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/i/flow/login?redirect_after_login=%2Fkrmuniversity"
                    target="_blank"
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/school/krmuniv/posts/?feedView=all"
                    target="_blank"
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/krmuniv"
                    target="_blank"
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 6.5H17.51"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@KRMangalamUniversity"
                    target="_blank"
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16137 5.19941C1.82075 5.55057 1.57878 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17214 18.2945C2.50597 18.6308 2.92572 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                {/* <h3 className="text-xl font-bold text-blue-900 mb-4">Send Us a Message</h3> */}
                {/* <form>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    Send Message
                  </Button>
                </form> */}

                <div className="bg-white/10 backdrop-blur-sm rounded-lg">
                  <Image
                    src="/krmu.jpg"
                    alt="KR Mangalam University Campus"
                    className="rounded-lg shadow-lg"
                    width={600}
                    height={400} // use actual image size or close to it
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-12 pb-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  priority
                />
                <div>
                  <h3 className="text-xl font-bold">K.R. Mangalam</h3>
                  <p className="text-xs">University</p>
                </div>
              </div>
              <p className="text-blue-200 mb-4">
                Shaping tomorrow leaders with quality education and values since
                2013.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/krmuniv/"
                  target="_blank"
                  className="text-white hover:text-blue-200"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5. INTERNALSYNC92 10 7V10H7V14H10VInternalsync2H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Fkrmuniversity"
                  target="_blank"
                  className="text-white hover:text-blue-200"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/krmuniv"
                  target="_blank"
                  className="text-white hover:text-blue-200"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"></path>
                    <circle cx="17.5" cy="6.5" r="1.5"></circle>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/school/krmuniv/posts/?feedView=all"
                  target="_blank"
                  className="text-white hover:text-blue-200"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"></path>
                    <path d="M6 9H2V21H6V9Z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    About University
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">SOET Departments</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Computer Science & Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Electrical & Electronics Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Mechanical Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Civil Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-200 hover:text-white transition"
                  >
                    Data Science & AI
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">📍</span>
                  <span>
                    KR Mangalam University, Sohna Road, Gurugram, Haryana, India
                    - 122103
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">📞</span>
                  <span>01148884888</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✉️</span>
                  <span>soet.krmu.2013@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>
              This project is developed by Rishabh Rajput & Khushnam Chauhan | ©{" "}
              {new Date().getFullYear()} KR Mangalam University. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
