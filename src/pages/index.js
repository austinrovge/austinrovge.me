import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <SEO title="About" />
                <h1>Hi, I'm Austin.</h1>
                <Img className="photo-circle" alt={this.props.data.austin.name} fluid={this.props.data.austin.childImageSharp.fluid} />
                <div>
                    <p>I'm a college student who's working on learning more about programming.</p>
                    <p>I first started programming in middle school when I discovered the <a href="https://www.codecademy.com/learn/introduction-to-javascript" rel="noopener noreferrer" target="_blank">Codeacademy course on JavaScript</a>. Within an hour of starting the course, I was proudly showing my mom the basic for loops I made!</p>
                    <p>In high school, I joined robotics to help program robots in C++, but I ended up switching gears and helping out with the team's web department. I helped work on <a href="https://atthecontrol.com" rel="noopener noreferrer" target="_blank">At The Control</a>, a streaming service for <a href="https://www.firstinspires.org/robotics/frc" rel="noopener noreferrer" target="_blank">FIRST Robotics Competition</a> events.</p>
                    <p>After graduating from high school, I went to the <a href="https://www.msoe.edu" rel="noopener noreferrer" target="_blank">Milwaukee School of Engineering</a> to major in software engineering.</p>
                    <p>This website has some information about me and projects I've worked on, but I mostly use it to try out new web technologies!</p>
                </div>
            </Layout>
        )
    }
}

export const fluidImage = graphql`
    fragment fluidImage on File {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
`

export const aboutQuery = graphql`
    query {
        austin: file(relativePath: { eq: "austin.jpg" }) {
          ...fluidImage
        }
    }
`